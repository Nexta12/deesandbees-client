import DataTable from "@components/table/Datatable";
import styles from "./Testimonials.module.scss";
import { useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import { ErrorFormatter } from "@utils/helpers";
import { apiClient } from "@api/apiClient";
import { endpoints } from "@api/endpoints";
import { format } from "date-fns";
import { PuffLoader } from "react-spinners";
import Modal from "@components/modal/Modal";
import DeleteModal from "@components/deleteModal/DeleteModal";
import AddTestimonials from "./AddTestimonials";
import EditTestimonials from "./EditTestimonials";

const Testimonials = () => {
  const [testimonialsData, setTestimonialsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [editingTestimonial, setEditingTestimonial] = useState(null);

  // ✅ Fetch testimonials
  const fetchTestimonials = useCallback(async () => {
    try {
      setLoading(true);
      const res = await apiClient.get(endpoints.fetchTestimonials);
      setTestimonialsData(res.data.data || []);
    } catch (error) {
      toast.error(ErrorFormatter(error));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTestimonials();
  }, [fetchTestimonials]);

  // 🗑 Delete testimonial
  const handleDelete = (data) => {
    setOpenDeleteModal(true);
    setItemToDelete(data._id);
  };

  const confirmDelete = async () => {
    if (itemToDelete) {
      try {
        await apiClient.delete(`${endpoints.deleteTestimonial}/${itemToDelete}`);

        // ✅ Instantly update UI
        setTestimonialsData((prev) =>
          prev.filter((t) => t._id !== itemToDelete)
        );

        toast.success("Testimonial deleted successfully!");
      } catch (error) {
        toast.error(ErrorFormatter(error));
      } finally {
        setOpenDeleteModal(false);
        setItemToDelete(null);
      }
    }
  };

  // ✏️ Edit testimonial
  const handleEdit = (data) => {
    setEditingTestimonial(data);
    setIsEditModalOpen(true);
  };

  // 📋 Table columns
  const columns = [
    {
      header: "Name",
      accessorKey: "fullName",
    },
    {
      header: "Message",
      accessorKey: "message",
      cell: (info) => (
        <span title={info.getValue()}>
          {info.getValue()?.length > 40
            ? info.getValue().slice(0, 40) + "..."
            : info.getValue()}
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
            onClick={() => handleEdit(row.original)}
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
      {/* 🗑 Delete Modal */}
      <DeleteModal
        isOpen={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        onConfirm={confirmDelete}
        message="Are you sure you want to delete this testimonial?"
      />

      {/* ⏳ Loader */}
      {loading ? (
        <div className={styles.loaderBox}>
           <span>Loading...</span>
        </div>
      ) : (
        <DataTable
          title="Testimonials"
          columns={columns}
          data={testimonialsData}
          onAddNew={() => setModalOpen(true)}
        />
      )}

      {/* ➕ Add Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <AddTestimonials
          onSuccess={() => {
            setModalOpen(false);
            fetchTestimonials();
          }}
        />
      </Modal>

      {/* ✏️ Edit Modal */}
      <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
        <EditTestimonials
          testimonialData={editingTestimonial}
          onSuccess={() => {
            setIsEditModalOpen(false);
            fetchTestimonials();
          }}
        />
      </Modal>
    </div>
  );
};

export default Testimonials;
