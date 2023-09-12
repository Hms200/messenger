'use client'

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'
import clsx from 'clsx'

interface InputProps {
	label: string
	id: string
	type?: string
	required?: boolean
	register: UseFormRegister<FieldValues>
	errors: FieldErrors
	disabled?: boolean
}

const Input = ({ label, id, type, required, register, errors, disabled }: InputProps) => {
	return (
		<div>
			<label htmlFor={id} className='block text-sm font-medium leading-6 text-gray-900'>
				{label}
			</label>
			<div className='mt-2'>
				<input
					id={id}
					type={type}
					autoComplete={id}
					disabled={disabled}
					{...register(id, { required })}
					className={clsx(
						`
			 			form-input
			 			ring-gary-300
			 			block
			 			w-full
			 			rounded-md
			 			border-0
			 			py-1.5
			 			text-gray-900
			 			shadow-sm
			 			ring-1
			 			ring-inset
			 			placeholder:text-gray-400
			 			focus:ring-2
			 			focus:ring-inset
			 			focus:ring-sky-600
			 			sm:text-sm
			 			sm:leading-6
					`,
						errors[id] && 'focus:ring-rose-600',
						disabled && 'cursor-default opacity-50',
					)}
				/>
			</div>
		</div>
	)
}

export default Input
