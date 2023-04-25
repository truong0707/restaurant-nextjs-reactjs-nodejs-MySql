import axiosClient from "../api/axios";

interface dataUserTeacher {
  name: String;
  email: String;
  password: String;
  role_id: Number;
  confirmPass: String
}

const userServices: any = {
  getUserApi: async (id: string, role: any) => {
    const response = await axiosClient.get(`/api/v1/user?id=ALL&${role === 0 ? null : `role=${role}`}`);
    return response;
  },

  deleteUserApi: async (id: String) => {
    const response = await axiosClient.delete(`user/delete/${id}`);
    return response;
  },

  getUserDetailApi: async (id: String) => {
    const response = await axiosClient.get(`user/get?id=${id}`);

    return response;
  },

  postCreateUserApi: async (dataUser: dataUserTeacher) => {
    const { name, email, password, role_id, confirmPass } = dataUser;

    const response = await axiosClient.post(`api/v1/user/create`, {
      name: name,
      email: email,
      password: password,
      confirmPass: confirmPass,
      role_id: role_id,
    });

    return response;
  },

  editUserApi: async (data: any) => {
    try {
      const {
        id,
        name,
        age,
        gender,
        phone_number,
        address,
        education,
        experience,
        about_me,
        avatar,
      } = data;

      const response = await axiosClient.put(`user/edit/${id}`, {
        name,
        age,
        gender,
        phone_number,
        address,
        education,
        experience,
        about_me,
        avatar,
      });

      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default userServices;
