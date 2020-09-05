<template>
    <ul class="list-group">
        <li class="list-group-item">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <div class="media">
                <img width="70px" src="../assets/mikotek.jpg" class="mr-3" alt="...">
                <div class="media-body">
                    <p class="mt-0"> Nama </p>
                    <button class="btn-qty btn btn-sm btn-primary"> + </button>
                    x 1
                    <button class="btn-qty btn btn-sm btn-primary"> - </button>
                </div>
            </div>
        </li>
    </ul>

</template>

<style scoped>
.btn-qty {
    border-radius: 50%;
    width: 30px;
}

.media {
    width: 90%;
}

.media-body {
    text-align: left;
}

</style>