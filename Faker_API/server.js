const {faker} = require('@faker-js/faker');
const port = 8000
const express = require('express')
const app = express()

const createUser = () => {
    const fakeUser ={
        id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number()
    };
    return fakeUser;
};

const createCompany = () => {
    const fakeCompany = {
        id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.address.streetAddress(true),
            city: faker.address.city(),
            state: faker.address.state(),
            zip: faker.address.zipCode(),
            country: faker.address.country()
        },
    }
    return fakeCompany;
}
app.get('/api/users/new', (req, res) => {
    const newUser = createUser();
    return res.json(newUser)
})

app.get('/api/companies/new', (req, res) =>{
    const newCompany = createCompany();
    return res.json(newCompany)
})

app.get('/api/user/company', (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    return res.json({newUser, newCompany})

})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})