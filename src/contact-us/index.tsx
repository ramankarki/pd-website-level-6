'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import exitIcon from '../../public/images/exit.svg'
import Image from 'next/image'

type Form = {
	name: string
	email: string
	subject: string
	message: string
	formState: 'typing' | 'submitting' | 'submitted' | 'failed' | 'exit modal'
}

const netlifyForm = 'contact'

export default function ContactUs() {
	const [form, setForm] = useState<Form>({
		name: '',
		email: '',
		subject: '',
		message: '',
		formState: 'typing',
	})

	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		for (const value of Object.values(form)) {
			if (!value.trim()) return
		}

		setForm((prev) => ({ ...prev, formState: 'submitting' }))

		await fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams({
				'form-name': netlifyForm,
				name: form.name,
				email: form.email,
				subject: form.subject,
				message: form.message,
			}).toString(),
		})
			.then((data) => {
				console.log(data)
				setForm({
					name: '',
					email: '',
					subject: '',
					message: '',
					formState: 'submitted',
				})
			})
			.catch((err) => {
				console.log(err)
				setForm((prev) => ({ ...prev, formState: 'failed' }))
			})
	}

	const onInputChange = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setForm((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
			formState: 'typing',
		}))
	}

	const onModalExit = () => {
		setForm((prev) => ({ ...prev, formState: 'exit modal' }))
	}

	return (
		<section>
			<div className=''>
				<h2 className='font-bold text-xl text-center mt-20'>Contact me</h2>
				<p className='text-center text-sm mt-4'>
					Get in touch with us for inquiries or collaborations
				</p>
			</div>

			<form
				name={netlifyForm}
				method='POST'
				data-netlify={true}
				onSubmit={onSubmit}
			>
				<input type='hidden' name='form-name' value={netlifyForm} />
				<label>
					<p>Name</p>
					<input
						type='text'
						name='name'
						onChange={onInputChange}
						value={form.name}
						required
					/>
				</label>
				<label>
					<p>Email</p>
					<input
						type='email'
						name='email'
						onChange={onInputChange}
						value={form.email}
						required
					/>
				</label>
				<label>
					<p>Subject</p>
					<input
						type='text'
						name='subject'
						onChange={onInputChange}
						value={form.subject}
						required
					/>
				</label>
				<label>
					<p>Message</p>
					<textarea
						name='message'
						onChange={onInputChange}
						value={form.message}
						id=''
						cols={30}
						rows={4}
						required
					></textarea>
				</label>
				<button
					type='submit'
					disabled={form.formState === 'submitting'}
					className='submit'
				>
					{form.formState === 'submitting' ? 'Submitting' : 'Submit'}
				</button>
			</form>

			{form.formState === 'submitted' ? (
				<p className='form-success'>
					Form submitted successfully{' '}
					<Image
						onClick={onModalExit}
						src={exitIcon}
						alt='exit icon'
						width={16}
						height={16}
					/>
				</p>
			) : form.formState === 'failed' ? (
				<p className='form-failed'>
					Form submission failed{' '}
					<Image
						onClick={onModalExit}
						src={exitIcon}
						alt='exit icon'
						width={16}
						height={16}
					/>
				</p>
			) : null}
		</section>
	)
}
