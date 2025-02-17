<scripts setup>

</scripts>

<template>
    <section>
        <RouterLink to="/users">New User</RouterLink>
        <table>
            <thead>
                <tr>
                    <th>Serial</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>prokash</td>
                    <td>@gmail</td>
                    <td>gendre</td>
                    <td>status</td>
                    <td>
                        <span>Edit</span>
                        <span>Delete</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<style scoped>
table{
    width: 100%;
    border-collapse: collapse;
}
thead tr{
    background-color: #1F604A;
    color: #fff;
    width: 100%;
}

th, td {
    padding: 10px;
    border: 1px solid #918383;
    text-align: left;
}

th {
    text-transform: uppercase;
}
</style>