import { Validators, createFormValidation } from "@lemoncode/fonk";

const validationSchema = {
    field: {
        email: [
            {
                validator: Validators.required,
                validator: Validators.email,
                message: 'Email no válido',
            },
        ],
    },
};

export const formValidation = createFormValidation(validationSchema);