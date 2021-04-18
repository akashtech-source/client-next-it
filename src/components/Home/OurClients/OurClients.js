import React from 'react';
import './OurClients.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faTasks, faUserFriends, faUsers, faWifi } from '@fortawesome/free-solid-svg-icons'
import './OurClient.css';
const OurClients = () => {

    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The lower the slower

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		const inc = target / speed;

		if (count < target) {

			counter.innerText = count + inc;

			setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target;
                }
	};

	updateCount();
});

    return (
        <section class="counters mt-5">
            <div className="mt-5 mb-5 pb-5 text-center">
                <h4>Our Satisfied Client</h4>
                <h1 className="text-warning">Your Priority is much important</h1>
            </div>
			<div class="container">
				<div>

					<FontAwesomeIcon icon={faUserFriends} />
					<div class="counter" data-target="3000">3000</div>
					<h3>Happy Client</h3>
				</div>
				<div>
					<FontAwesomeIcon icon={faTasks} />
					<div class="counter" data-target="1890">2000</div>
					<h3>Complete Task</h3>
				</div>
				<div>
				<FontAwesomeIcon icon={faUsers} />
					<div class="counter" data-target="1990">1990</div>
					<h3>Recommended By</h3>
				</div>
				<div>
				<FontAwesomeIcon icon={faWifi} />
					<div class="counter" data-target="3000">3000</div>
					<h3>Connections</h3>
				</div>
			</div>
		</section>
    );
};

export default OurClients;