/* eslint-disable react-refresh/only-export-components */
import axios from "axios";

const baseUrl = "http://localhost:8000/";

const api = axios.create({
  baseURL: baseUrl,
});

const auth = axios.create({
  baseURL: baseUrl,
});

//it's work is just to set tokens in the local storage
export const setTokens = (accessToken, refreshToken) => {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
};

//it's work is just to remove tokens from the local storage
export const removeTokens = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};

// check if the token is valid
export const checkTokenIsValid = async () => {
  if (!getAccessToken()) {
    return false;
  }
  const res = await auth.post("auth/jwt/verify/", { token: getAccessToken() });
  return res.data.code === "token_not_valid" ? false : true;
};

// intercept request and modify headers
api.interceptors.request.use(
  async (config) => {
    const accessToken = getAccessToken();
    if (!accessToken) {
      redirectToLogin();
      return;
    }
    if (accessToken) {
      config.headers["Authorization"] = "JWT " + accessToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response interceptors
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      redirectToLogin();
      return;
      // handle error: inform user, go to login, etc
    } else {
      return Promise.reject(error);
    }
  }
);

//get my data incase there is a refresh
export const whoami = async () => {
  const response = await api.get("auth/users/me/");
  return response.data;
};

// user activation endpoint or activation resend endpoint
export const ActivateUser = async (c) => {
  // console.log(c);
  const res = await auth.post("auth/users/activation/", c);

  return res.data;
};

// login handler
export const GET_AUTH = async (credentials) => {
  const response = await auth.post("auth/jwt/create/", credentials);
  return response.data;
};

// Register handler
export const CREATE_NEW_USER = async (credentials) => {
  // Check if token needs refreshing before making the request
  const response = await auth.post("auth/users/", credentials);
  return response.data;
};
// Password reset handler
export const RESET_PASSWORD = async (data) => {
  const response = await auth.post("auth/users/reset_password_confirm/", data);
  return response.data;
};

//RESET USER PASSWORD sending only the email the rest is in the email
export const RESET_USER_PASSWORD = async (email) => {
  const response = await auth.post(`auth/users/reset_password/`, email);
  return response.data;
};
// redirect to login
export const redirectToLogin = () => {
  // Implement your logic to redirect to the login page
  window.location.href = "/";
};

// get access token
export const getAccessToken = () => {
  return localStorage.getItem("accessToken");
};

export const logout = () => {
  removeTokens();
  redirectToLogin();
};

export const UPDATE_PROFILE = async (formData) => {
  try {
    const accessToken = getAccessToken();
    if (!accessToken) {
      throw new Error("Token d'accès manquant");
    }
    const response = await api.patch(
      "app/user/update/",
      formData,
      {
        headers: {
          'Authorization': `Token ${accessToken}`,
          'Content-Type': 'multipart/form-data' 
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la mise à jour du profil:', error);
    throw error;
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get(`${baseUrl}app/categories`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des catégories", error);
    throw error;
  }
}

export const getSousCategories = async () => {
  try {
    const response = await axios.get(`${baseUrl}app/souscategories`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des sous catégories", error);
    throw error;
  }
}

export const getDocumentBySousCategories1 = async () => {
  try {
    const response = await axios.get(`${baseUrl}app/documents/sous_category/1/`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des documents par sous-catégorie", error);
    throw error;
  }
};

export const getDocumentBySousCategories2 = async () => {
  try {
    const response = await axios.get(`${baseUrl}app/documents/sous_category/2/`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des documents par sous-catégorie", error);
    throw error;
  }
};

export const getDocumentBySousCategories3 = async () => {
  try {
    const response = await axios.get(`${baseUrl}app/documents/sous_category/3/`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des documents par sous-catégorie", error);
    throw error;
  }
};

export const getBookDetails = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}app/documents/${id}/`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des détails du livre", error);
    throw error;
  }
};

export const getDocumentsByCategory = async (categoryId) => {
  try {
    const response = await axios.get(`${baseUrl}app/documents/category/${categoryId}/`);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des documents par catégorie", error);
    throw error;
  }
};

export const getAllComments = async () => {
  try {
    const response = await axios.get(`${baseUrl}app/comments/`); // Assurez-vous que l'URL est correcte pour obtenir tous les commentaires
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des commentaires", error);
    throw error;
  }
};