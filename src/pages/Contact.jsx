import { Form } from "react-router-dom"

export const contactdata = async({request})=>{
    try {
        const res = await request.formData()
        const data = Object.fromEntries(res)
        console.log(data)
        console.log(res)
        return null
    } catch (error) {
        console.log(error.message)
    }
}
export const Contact = () => {
    return (
        <>
            <h1>Contact US</h1>
            <div>
                <Form method="POST" action="/contact">
                    <div>
                        <label>Title: </label>
                        <input name="title" type="text" />
                    </div>
                    <div>
                        <label>Description: </label>
                        <input name="description" type="text" />
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </Form>
            </div>
        </>
    )
}