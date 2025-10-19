export const endpoints = {
    createOrder: "/api/v1/order/create",
    login: "/api/v1/secure/login",
    validateAuth: "/api/v1/secure/validate",
    createUser: "/api/v1/user/create",
    fetchUsers: "/api/v1/user/all",
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
  