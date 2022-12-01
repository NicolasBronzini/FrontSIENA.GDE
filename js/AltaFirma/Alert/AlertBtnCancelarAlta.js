bootbox.confirm({
    title: 'La acción seleccionada elimina los valores ingresados',
    message: 'Desea continuar con la cancelacion del alta de proceso masivos?.',
    buttons: {
        cancel: {
            label: '<i class="fa fa-times" class="btn btn-danger"></i> Cancel'
        },
        confirm: {
            label: '<i class="fa fa-check" class="btn btn-success"></i> Confirm'
        }
    },
    callback: function (result) {
        console.log('This was logged in the callback: ' + result);
    }
});

