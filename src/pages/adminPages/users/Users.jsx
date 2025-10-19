import DataTable from "@components/table/Datatable";
import styles from "./Users.module.scss";
import { useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import { ErrorFormatter } from "@utils/helpers";
import { apiClient } from "@api/apiClient";
import { endpoints } from "@api/endpoints";
import { format } from "date-fns";
import { PuffLoader } from "react-spinners";
import Modal from "@components/modal/Modal";
import AddUser from "./AddUser";
import DeleteModal from "@components/deleteModal/DeleteModal";
import EditUser from "./EditUser";

const Users = () => {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [editingUser, setEditingUser] = useState(null);

  // ✅ Define fetchUsers with useCallback so we can reuse it
  const fetchUsers = useCallback(async () => {
    try {
      setLoading(true);
      const res = await apiClient.get(endpoints.fetchUsers);
      setUsersData(res.data || []);
    } catch (error) {
      toast.error(ErrorFormatter(error));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleDelete = (data) => {
    setOpenDeleteModal(true);
    setItemToDelete(data._id);
  };

  const handleEditUser = (data) => {
    setEditingUser(data); // ✅ Store full user object
    setIsEditModalOpen(true);
  };

  const confirmDelete = async () => {
    if (itemToDelete) {
      try {
        await apiClient.delete(`${endpoints.deleteUser}/${itemToDelete}`);

        // ✅ Update UI instantly
        setUsersData((prevUsers) => prevUsers.filter((user) => user._id !== itemToDelete));

        toast.success("User account deleted successfully!");
      } catch (error) {
        toast.error(ErrorFormatter(error));
      } finally {
        setOpenDeleteModal(false);
        setItemToDelete(null);
      }
    }
  };

  const columns = [
    {
      header: "Name",
      accessorFn: (row) => `${row.firstName} ${row.lastName}`,
    },
    {
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "Role",
      accessorKey: "role",
      cell: (info) => (
        <span
          style={{
            textTransform: "capitalize",
            fontWeight: 500,
            color: info.getValue() === "admin" ? "#007bff" : "#0f172a",
          }}
        >
          {info.getValue()}
        </span>
      ),
    },
    {
      header: "Created Date",
      accessorFn: (row) => format(new Date(row.createdAt), "MMM dd, yyyy"),
    },
    {
      header: "Actions",
      cell: ({ row }) => (
        <div className={styles.actionButtons}>
          <button
            onClick={() => handleEditUser(row.original)}
            className={`${styles.actionBtn} ${styles.editBtn}`}
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(row.original)}
            className={`${styles.actionBtn} ${styles.deleteBtn}`}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      {/* 🗑 Delete Confirmation Modal */}
      <DeleteModal
        isOpen={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        onConfirm={confirmDelete}
        message="Are you sure you want to delete this account?"
      />

      {/* 🧭 Loader */}
      {loading ? (
        <div className={styles.loaderBox}>
          <PuffLoader size={60} color="#4866ff" />
        </div>
      ) : (
        <DataTable
          title="Users List"
          columns={columns}
          data={usersData}
          onAddNew={() => setModalOpen(true)}
        />
      )}

      {/* ➕ Add User Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <AddUser
          onSuccess={() => {
            setModalOpen(false);
            fetchUsers();
          }}
        />
      </Modal>

      {/* ✏️ Edit User Modal */}
      <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
        <EditUser
          userData={editingUser}
          onSuccess={() => {
            setIsEditModalOpen(false);
            fetchUsers();
          }}
        />
      </Modal>
    </div>
  );
};

export default Users;
