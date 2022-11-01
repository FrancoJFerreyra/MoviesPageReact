import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Comments = () => {
	const [userComment, setUserComment] = useState([]);
	const onHandleSubmit = (e) => {
		e.preventDefault();
		setUserComment([
			...userComment,
			{
				userName: e.target.userName.value,
				comment: e.target.text.value,
			},
		]);
	};
	return (
		<div>
			<div className='row moviePage__comment--form'>
				<form className='col-md-8' onSubmit={onHandleSubmit}>
					<div>
						<label className='form-label'>Username</label>
						<input
							type='text'
							name='userName'
							className='form-control'
							placeholder='Franco2022'
							required
						/>
					</div>
					<div className='moviePage__form--textarea'>
						<label className='form-label'>Comment</label>
						<textarea
							required
							className='form-control'
							name='text'
							id='exampleFormControlTextarea1'
							rows='3'
						></textarea>
					</div>
					<div className='text-center'>
						<button type='submit' className='btn btn-success'>
							Submit
						</button>
					</div>
				</form>
			</div>
			<div className='container-md'>
				<div className='moviePage__comment--list'>
					{userComment.map((e, index) => {
						return (
							<div key={index} className='moviePage__comment'>
								<FontAwesomeIcon icon={faUser} />
								<div>
									<h5>{e.userName}</h5>
									<p>{e.comment}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Comments;
