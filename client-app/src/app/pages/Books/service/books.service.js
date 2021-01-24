
import axios from "../../../services/api";

class BookService {

    static async GetAllBooksService(pageNumber = 0, pageSize = 10, searchTerm = null) {
        var url = `/api/v1/Books`;
        url = (searchTerm === null) ? url + `?pageNumber=${pageNumber}&pageNumber=${pageNumber}` : url;
        url = ( searchTerm !== null) ? url + `?pageNumber=${pageNumber}&pageNumber=${pageNumber}&searchTerm=${searchTerm}` : url;
console.log('url =>', url);
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
        if(id) {
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
        const url = `/api/v1/RentBook/Rented/?rented=${rented}`;
    
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

    static async CreatedBook(book) {
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
        const bookSet = book;
        const url = `/api/v1/Books/^${book.Id}`;
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
    static async DeleteBook(book) {
        const bookSet = book;
        const url = `/api/v1/Books/^${book.Id}`;
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
                data: bookSet,
            })
            .then((response) => response.data)
            .catch((error) => {
                throw error;
            });
    }
}

export default BookService;