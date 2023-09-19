import Swal from "sweetalert2";

const Toaster =
{
    success(textTitle = "", pos = 'top-end', isToast = true, time = 1500) {
        Swal.fire(
            {
                toast: isToast,
                position: pos,
                width: "auto",
                icon: 'success',
                title: textTitle,
                showConfirmButton: false,
                timer: time,
            });
    },
    error(textTitle = "", pos = 'top-end', isToast = true, time = 1500) {
        Swal.fire(
            {
                toast: isToast,
                position: pos,
                width: "auto",
                icon: 'error',
                title: textTitle,
                showConfirmButton: false,
                timer: time,
            });
    },
    refresh(title, description, onCLick) {
        Swal.fire(
            {
                title: title,
                text: description,
                width: "auto",
                icon: 'warning',
                allowOutsideClick: false,
            }).then((onCLick));
    },
    successProgressBar(textTitle = "", time = 3000) {
        const Toast = Swal.mixin(
            {
                showConfirmButton: false,
                timer: time,
                width: "auto",
                timerProgressBar: true,
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false
            })
        Toast.fire(
            {
                icon: 'success',
                title: textTitle
            })
    },
    isSure(title = 'Es-tu sûr?', text = 'Vous ne pourrez pas revenir en arrière!', confirmButtonText = 'Oui, je suis sûr!', cancelButton = true, outsideClick = true, response) {
        Swal.fire(
            {
                title: title,
                text: text,
                icon: 'warning',
                width: "auto",
                showCancelButton: cancelButton,
                allowOutsideClick: outsideClick,
                allowEscapeKey: outsideClick,
            }
        ).then((response))
    },
    selectItem(title, inputOptions, inputPlaceholder, onResponse) {
        Swal.fire({
            title: title,
            input: 'select',
            cancelButtonText: "Annuler",
            inputOptions: inputOptions,
            inputPlaceholder: inputPlaceholder,
            showCancelButton: true,
        })
            .then(onResponse)
    }
};
export default Toaster;