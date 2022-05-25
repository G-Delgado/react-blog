const express = require('express')
const app = express()

app.get("/api", (req,res) => {
    res.json({
        "users": [
            "userOne",
            "userTwo",
            "userThree"
        ]
    })
})

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server started on port ${process.env.PORT || 5000}`)
})