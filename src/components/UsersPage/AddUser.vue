<template>
    <section>
        <RouterLink to="/all-users">All Users</RouterLink>
        <div class="section-header">
            <h2>New user</h2>
            <p>Use the below form to create a new account</p>
        </div>
        <form>
            <div>
                <label for="name">Name</label>
                <input id="name" type="text" placeholder="Your Name">
            </div>
            <div>
                <label for="email">Email</label>
                <input id="email" type="text" placeholder="Your Email">
            </div>

            <div class="gender">
                <label>Gender</label>
                <div>
                    <input type="radio" name="gender" id="male" value="male">
                    <label for="male">Male</label>
                </div>

                <div>
                    <input type="radio" name="gender" id="female" value="female">
                    <label for="female">Female</label>
                </div>
            </div>

            <div class="status">
                <label>Status</label>
                <div>
                    <input type="radio" name="status" id="active" value="active">
                    <label for="active">Active</label>
                </div>

                <div>
                    <input type="radio" name="status" id="inactive" value="inactive">
                    <label for="female">Inactive</label>
                </div>
            </div>
            <input class="btn" type="submit" value="Save">
        </form>

    </section>
</template>

<style scoped>
.section-header {
    text-align: center;
}

form {
    max-width: 768px;
    margin: 0 auto;
}

form input[type="text"],
form input[type="email"],
form input[type="submit"] {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
}

.gender,
.status {
    display: flex;
    gap: 20px;
    margin-bottom: 10px;
}

.btn {
    background-color: #1F604A;
    color: #fff;
}
</style>