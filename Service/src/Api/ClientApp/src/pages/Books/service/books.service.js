
import axios from "../../../services/api";

class BookService {

    static async GetAllBooksService(pageNumber = null, pageSize = 0, searchTerm = null) {
        let url = `/api/v1/Books/`;
        url += (pageNumber || pageSize > 0 || searchTerm) ? "?" : ''
        url += (pageNumber) ? `${pageNumber}` : '';
        url += (pageSize > 0 && pageNumber && searchTerm === null) ? `pageNumber?${pageNumber}&pageNumber=${pageNumber}` : '';
        url += (pageSize > 0 && pageNumber !== null && searchTerm !== null) ? `pageNumber?${pageNumber}&pageNumber=${pageNumber}&searchTerm=${searchTerm}` : '';
        url += (pageSize === 0 && pageNumber === null && searchTerm !== null) ? `searchTerm=${searchTerm}` : '';

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