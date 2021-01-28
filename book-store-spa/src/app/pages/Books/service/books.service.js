import axios from "../../../services/api";
import isAuthenticated from "../../../services/auth";

class BookService {
  static async GetAllBooksService(
    pageNumber = 0,
    pageSize = 10,
    searchTerm = null
  ) {
    if (!isAuthenticated) {
      window.location = "/";
    }
    var url = `/api/v1/Books`;
    url =
      searchTerm === null
        ? url + `?pageNumber=${pageNumber}&pageNumber=${pageNumber}`
        : url;
    url =
      searchTerm !== null
        ? url +
          `?pageNumber=${pageNumber}&pageNumber=${pageNumber}&searchTerm=${searchTerm}`
        : url;

    return axios
      .request({
        method: "GET",
        url: `${url}`,
        responseType: "application/json",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  }
  static async GetBookByIdService(id = null) {
    if (!isAuthenticated) {
      window.location = "/";
    }
    if (id) {
      const url = `/api/v1/Books/${id}`;

      return axios
        .request({
          method: "GET",
          url: `${url}`,
          responseType: "application/json",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((response) => response.data)
        .catch((error) => {
          throw error;
        });
    }
  }
  static async GetCategories() {
    if (!isAuthenticated) {
      window.location = "/";
    }
    const url = `/api/v1/Category`;

    return axios
      .request({
        method: "GET",
        url: `${url}`,
        responseType: "application/json",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  }
  static async GetBookNotRentedByIdService(rented = false) {
    if (!isAuthenticated) {
      window.location = "/";
    }
    const url = `/api/v1/RentBook/?flag=${rented}`;

    return axios
      .request({
        method: "GET",
        url: `${url}`,
        responseType: "application/json",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  }

  static async rentBookService(params) {
    if (!isAuthenticated) {
      window.location = "/";
    }
    const url = "/api/v1/RentBook";
    return axios
      .request({
        method: "POST",
        url: `${url}`,
        responseType: "application/json",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        data: params,
      })
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  }
  static async returnBookService(params) {
    if (!isAuthenticated) {
      window.location = "/";
    }
    const url = `/api/v1/RentBook/${params.id}`;
    return axios
      .request({
        method: "PUT",
        url: `${url}`,
        responseType: "application/json",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        data: params,
      })
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  }
  static async CreatedBook(book) {
    if (!isAuthenticated) {
      window.location = "/";
    }
    const bookSet = book;
    const url = "/api/v1/Books";
    return axios
      .request({
        method: "POST",
        url: `${url}`,
        responseType: "application/json",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        data: bookSet,
      })
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  }
  static async UpdateBook(book) {
    if (!isAuthenticated) {
      window.location = "/";
    }
    const bookSet = book;
    const url = `/api/v1/Books/${book.id}`;
    return axios
      .request({
        method: "PUT",
        url: `${url}`,
        responseType: "application/json",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        data: bookSet,
      })
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  }
  static async DeleteBook(id) {
    if (!isAuthenticated) {
      window.location = "/";
    }
    const url = `/api/v1/Books/${id}`;
    return axios
      .request({
        method: "DELETE",
        url: `${url}`,
        responseType: "application/json",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  }
}

export default BookService;
