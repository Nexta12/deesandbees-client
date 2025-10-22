export const endpoints = {
    login: "/api/v1/secure/login",
    forgotPassword: "/api/v1/secure/forgotPassword",
    verifyOtp: "/api/v1/secure/verifyOtp",
    resetPassword: "/api/v1/secure/resetPassword",
    validateAuth: "/api/v1/secure/validate",
    createUser: "/api/v1/user/create",
    fetchUsers: "/api/v1/user/all",
    fetchStats: "/api/v1/user/stats",
    updateUser: "/api/v1/user/edit",
    deleteUser: "/api/v1/user/delete",
    fetchTestimonials:"/api/v1/testimonial/all",
    createTestimonial:"/api/v1/testimonial/create",
    EditTestimonial:"/api/v1/testimonial/edit",
    deleteTestimonial:"/api/v1/testimonial/delete",
    fetchMessages:"/api/v1/contact/all",

    // Messages
    sendMessage: "/api/v1/contact/create",
    deleteMessage: "/api/v1/contact/delete",
    markMessageAsSeen: "/api/v1/contact/getOne",
};
  