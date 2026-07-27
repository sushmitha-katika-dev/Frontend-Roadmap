import { useState } from "react"



interface LoginForm {
    email: string;
    password: string;
    age: number
}

export default function LoginPage() {

    // const [email, setEmail] = useState<string>()
    // const [password, setPassword] = useState<string>()
    // const [roll, setRoll] = useState<string>()


    const [formdata, setFormdata] = useState<LoginForm>({
        email: "",
        password: "",
        age: 0
    })
    const [error, setError] = useState<string>()


    function handleSubmit() {
        setError("")
        console.log(formdata)

        if (!formdata.email) setError("Email is required!")
        if (!formdata.password) setError("Password is required!")
        if (!formdata.age) setError("age is required!")

        if (!formdata.email.includes("@")) setError("Email is not Valid")
        // if (!formdata.email.includes("@")) setError("Email is not Valid")

        if (formdata.age < 18) setError("You must be 18 years or older")
    }

    return (
        <div className="h-full flex flex-col mb-10">
            <h2 className="text-center">Login</h2>

            <form className="flex flex-col gap-2" onSubmit={(e) => {
                e.preventDefault()
                handleSubmit()
            }}>
                <label htmlFor="">Email</label>
                <input type="email"
                    value={formdata.email}
                    onChange={(e) => {
                        setFormdata({
                            ...formdata,
                            email: e.target.value
                        })
                    }}
                    className="caret-pink-500 bg-yellow-200 outline-none"
                />

                <label htmlFor="">AGE</label>
                <input type="number"
                    value={formdata.age}
                    onChange={(e) => {
                        setFormdata({
                            ...formdata,
                            age: Number(e.target.value)
                        })
                    }}

                    className="caret-pink-500 bg-yellow-200 outline-none" />


                <label htmlFor="">Password</label>
                <input type="password"
                    value={formdata.password}
                    onChange={(e) => {
                        setFormdata({
                            ...formdata,
                            password: e.target.value
                        })
                    }}

                    className="caret-pink-500 bg-yellow-200 outline-none" />


                <button className="bg-green-400 rounded">
                    Submit
                </button>


                <span className="text-red-600">{error}</span>
            </form>
        </div>
    )
}