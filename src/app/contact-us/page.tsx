'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import exitIcon from '../../../public/images/exit.svg'
import Image from 'next/image'
import HeaderComponent from '@/components/header'
import FooterComponent from '@/components/footer'

type Form = {
	name: string
	email: string
	phone: string
	companyName: string
	jobTitle: string
	jobDetails: string
	country: string
	subject: string
	message: string
	formState: 'typing' | 'submitting' | 'submitted' | 'failed' | 'exit modal'
}

const netlifyForm = 'contact'

export default function ContactUs() {
	const [form, setForm] = useState<Form>({
		name: '',
		email: '',
		phone: '',
		companyName: '',
		jobTitle: '',
		jobDetails: '',
		country: '',
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

		await fetch('/form', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams({
				'form-name': netlifyForm,
				'bot-field': '',
				name: form.name,
				email: form.email,
				subject: form.subject,
				message: form.message,
				companyName: form.companyName,
				country: form.country,
				jobDetails: form.jobDetails,
				jobTitle: form.jobTitle,
				phone: form.phone,
			}).toString(),
		})
			.then((data) => {
				console.log(data)
				setForm({
					name: '',
					email: '',
					companyName: '',
					country: '',
					jobDetails: '',
					jobTitle: '',
					phone: '',
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
			<HeaderComponent />

			<div className=''>
				<h2 className='font-bold text-xl text-center mt-20'>Contact us</h2>
				<p className='text-center text-sm mt-4'>
					Get in touch with us for inquiries or collaborations
				</p>
			</div>

			<form onSubmit={onSubmit}>
				<div className='flex gap-5'>
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
				</div>
				<div className='flex gap-5'>
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
						<p>Phone</p>
						<input
							type='text'
							name='phone'
							onChange={onInputChange}
							value={form.phone}
							required
						/>
					</label>
				</div>
				<div className='flex gap-5'>
					<label>
						<p>Company</p>
						<input
							type='text'
							name='companyName'
							onChange={onInputChange}
							value={form.companyName}
							required
						/>
					</label>
					<label>
						<p>Job title</p>
						<input
							type='text'
							name='jobTitle'
							onChange={onInputChange}
							value={form.jobTitle}
							required
						/>
					</label>
				</div>
				<div className='flex gap-5'>
					<label>
						<p>Job details</p>
						<input
							type='text'
							name='jobDetails'
							onChange={onInputChange}
							value={form.jobDetails}
							required
						/>
					</label>
					<label>
						<p>Country</p>
						<input
							type='text'
							name='country'
							onChange={onInputChange}
							value={form.country}
							required
						/>
					</label>
				</div>
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

			<FooterComponent />
		</section>
	)
}
