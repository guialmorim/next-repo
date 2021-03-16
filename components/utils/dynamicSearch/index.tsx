import { genUserImageProfilePath, genUserList } from '@/utils/generator';
import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const DynamicSearch: React.FC = () => {
	const [users, setUsers] = useState(genUserList(10));
	const [searchTerm, setSearchTerm] = useState('');
	const [searchBarHasFocus, setSearchBarHasFocus] = useState(false);

	const editSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) =>
		setSearchTerm(e.target.value);

	const dynamicSearch = () => {
		if (searchTerm === '') return [];

		return users.filter((user) =>
			user.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
	};

	const filteredUsers = dynamicSearch();

	return (
		<div className="search">
			<div className="search__wrapper">
				<div className="search__input">
					<input
						type="text"
						value={searchTerm}
						onChange={editSearchTerm}
						placeholder="search anything here..."
						onFocus={() => setSearchBarHasFocus(true)}
						onBlur={() => setSearchBarHasFocus(false)}
					/>
					<AiOutlineSearch />
				</div>
				{searchBarHasFocus && filteredUsers?.length > 0 && (
					<div className="search__list">
						{filteredUsers?.map((user) => (
							<div className="search-item">
								<div className="search-item__wrapper">
									<div
										className="search-item__image"
										style={{
											backgroundImage: `url('${genUserImageProfilePath()}')`,
										}}
									></div>
									<div className="search-item__text">
										<div className="search-item__title">
											<h3>{user.name}</h3>
										</div>
										<div className="search-item__subtitle">
											<h3>{user.fullName}</h3>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default DynamicSearch;
