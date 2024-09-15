import Swal from "sweetalert2";

export const ConfirmDeleteAlert = () => {
    return Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
    });
}

export const SuccessAlert = (message) => {
    return Swal.fire({
        title: "Deleted!",
        text: message,
        icon: "success",
    });
}

export const ErrorAlert = (message = "Failed to delete the product.") => {
    return Swal.fire({
        title: "Error",
        text: message,
        icon: "error",
    });
}
