import Button from "../components/buttons/button";
import InputLabel from "../components/inputs/input-label";
import TextareaLabel from "../components/textarea/textarea-label";

const ContactPage = () => {

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-gray-900">
            <form className="rounded-xl p-5 w-[300px] bg-gray-800 space-y-3">
                <h2 className="text-white font-bold text-center text-2xl capitalize">
                    Contactanos
                </h2>
                <InputLabel
                    label="Nombre"
                    placeholder="Nombre"
                />

                <InputLabel
                    label="Correo"
                    placeholder="example@gmail.com"
                    placeholderCapitalize={false}
                />
                <TextareaLabel
                    label="Mensaje"
                    placeholder="Mensaje"
                />

                <Button
                    label="enviar"
                />
            </form>
        </div>
    );
};

export default ContactPage;
