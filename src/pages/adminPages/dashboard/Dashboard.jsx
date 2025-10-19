import Calender from "@components/calender/Calender";
import styles from "./Dashboard.module.scss";
import { useState } from "react";
import AddUser from "../users/AddUser";
import Modal from "@components/modal/Modal";
import { paths } from "@routes/path";
import { useNavigate } from "react-router-dom";
import AddTestimonials from "../testimonials/AddTestimonials";

const Dashboard = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isTestModalOpen, setTestModalOpen] = useState(false);
  const navigate = useNavigate();
  const stats = [
    { label: "Users", value: 120 },
    { label: "Testimonials", value: 25 },
    { label: "Messages", value: 40 },
  ];

  return (
    <div className={styles.dashboard}>
      <div className={styles.cards}>
        {stats.map((item) => (
          <div className={styles.card} key={item.label}>
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>

      <div className={styles.mainBody}>
        <div className={styles.left}>
          <Calender />
        </div>

        <div className={styles.rightPanel}>
          <div className={styles.reminders}>
            <h4>Upcoming Events</h4>
            <ul>
              <li>🗓️ Team Stand-up — 10:00 AM</li>
              <li>📞 Client Review — 1:30 PM</li>
              <li>📊 Dashboard Update — 5:00 PM</li>
            </ul>
          </div>

          <div className={styles.quickActions}>
            <h4>Quick Actions</h4>
            <div className={styles.buttons}>
              <button onClick={() => setModalOpen(true)}>Add User</button>
              <button onClick={() => navigate(paths.messages)}>
                View Messages
              </button>
              <button onClick={() => setTestModalOpen(true)}>
                New Testimonial
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <AddUser
          onSuccess={() => {
            setModalOpen(false);
          }}
        />
      </Modal>

      <Modal isOpen={isTestModalOpen} onClose={() => setTestModalOpen(false)}>
        <AddTestimonials
          onSuccess={() => {
            setTestModalOpen(false);
          }}
        />
      </Modal>
    </div>
  );
};

export default Dashboard;
