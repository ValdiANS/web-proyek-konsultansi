import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
})

//Admin
export const insertAdmin = payload => api.post(`/admin`, payload)
export const getAllAdmins = () => api.get(`/admins`)
export const updateAdminById = (id, payload) => api.put(`/admin/${id}`, payload)
export const deleteAdminById = id => api.delete(`/admin/${id}`)
export const getAdminById = id => api.get(`/admin/${id}`)

const apis = {
    //Admin
    insertAdmin,
    getAllAdmins,
    updateAdminById,
    deleteAdminById,
    getAdminById,
}

export default apis