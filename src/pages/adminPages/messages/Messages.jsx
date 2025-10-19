import React, { useState, useEffect, useCallback } from "react";
import styles from "./Messages.module.scss";
import { apiClient } from "@api/apiClient";
import { endpoints } from "@api/endpoints";
import { toast } from "react-toastify";
import { format } from "date-fns";
import { ErrorFormatter } from "@utils/helpers";
import { PuffLoader } from "react-spinners";
import DeleteModal from "@components/deleteModal/DeleteModal";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [messageToDelete, setMessageToDelete] = useState(null);

  // ✅ Fetch all messages
  const fetchMessages = useCallback(async () => {
    try {
      setLoading(true);
      const res = await apiClient.get(endpoints.fetchMessages);
      setMessages(res.data.data || []);
    } catch (error) {
      toast.error(ErrorFormatter(error));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  // 🗑 Handle delete
  const handleDeleteClick = (msgId) => {
    setMessageToDelete(msgId);
    setDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!messageToDelete) return;
    try {
      await apiClient.delete(`${endpoints.deleteMessage}/${messageToDelete}`);
      setMessages((prev) =>
        prev.filter((msg) => msg._id !== messageToDelete)
      );
      if (selectedMessage?._id === messageToDelete) {
        setSelectedMessage(null);
      }
      toast.success("Message deleted successfully!");
    } catch (error) {
      toast.error(ErrorFormatter(error));
    } finally {
      setDeleteModalOpen(false);
      setMessageToDelete(null);
    }
  };

  const processSelectedMessage = async (msg) => {
    setSelectedMessage(msg);

    try {

     await apiClient.get(`${endpoints.markMessageAsSeen}/${msg._id}`)
      
    } catch (error) {
      toast.error(ErrorFormatter(error))
    }
  }

  // 🧭 Loader
  if (loading) {
    return (
      <div className={styles.loaderBox}>
        <PuffLoader size={60} color="#4866ff" />
      </div>
    );
  }

  return (
    <div className={styles.messagesContainer}>
      {/* 🧾 Sidebar List */}
      <div className={styles.messagesList}>
        <h3>All Messages</h3>
        {messages.length === 0 ? (
          <p className={styles.noMessages}>No messages found</p>
        ) : (
          messages.map((msg) => (
            <div
              key={msg._id}
              className={`${styles.messageItem} ${
                selectedMessage?._id === msg._id ? styles.active : ""
              }`}
              onClick={() => processSelectedMessage(msg)}
            >
              <div className={styles.messageHeader}>
                <span className={styles.senderName}>{msg.fullName}</span>
                <span className={styles.date}>
                  {format(new Date(msg.createdAt), "MMM dd, yyyy")}
                </span>
              </div>
              <p className={styles.preview}>
                {msg.message?.slice(0, 30) || "No content..."}
              </p>
            </div>
          ))
        )}
      </div>

      {/* 📩 Message Detail */}
      <div className={styles.messageDetail}>
        {selectedMessage ? (
          <>
            <div className={styles.detailHeader}>
              <h3>{selectedMessage.fullName}</h3>

              <button
                className={styles.deleteBtn}
                onClick={() => handleDeleteClick(selectedMessage._id)}
              >
                Delete
              </button>
            </div>
             <div className={styles.detailHeader}>
            <p className={styles.email}>{selectedMessage.email}</p>

            <p className={styles.date}>
              {format(new Date(selectedMessage.createdAt), "PPpp")}
            </p>
             </div>
            <hr />
            <p className={styles.messageBody}>{selectedMessage.message}</p>
          </>
        ) : (
          <div className={styles.placeholder}>
            <p>Select a message to view details</p>
          </div>
        )}
      </div>

      {/* 🗑 Delete Confirmation Modal */}
      <DeleteModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={confirmDelete}
        message="Are you sure you want to delete this message?"
      />
    </div>
  );
};

export default Messages;
