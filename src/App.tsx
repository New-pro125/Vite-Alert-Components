import "./App.css";
import Alert from "./components/Alert";
import { AlertTriangle, Ban, Bell, CheckCheck, Info } from "lucide-react";
function App() {
	return (
		<>
			<Alert
				type={"alert-default"}
				icon={<Bell size={20} />}
				title="Upgrade Your Plan">
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel a
					commodi dolorum exercitationem, quibusdam tempora nemo
					<a href="/"> similique fugiat beatae</a> facere iste ratione facilis
					blanditiis unde! Nostrum temporibus consequuntur nisi inventore?
				</p>
			</Alert>
			<Alert
				type={"alert-info"}
				icon={<Info size={20} />}
				title="Note"
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus et ea nostrum eum. Nesciunt eos aperiam praesentium placeat ea velit voluptates, repellendus dicta iure maiores reprehenderit molestiae asperiores consequuntur dolores."
			/>
			<Alert
				type={"alert-success"}
				icon={<CheckCheck size={20} />}
				title="Your order has been Processed"
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus et ea nostrum eum. Nesciunt eos aperiam praesentium placeat ea velit voluptates, repellendus dicta iure maiores reprehenderit molestiae asperiores consequuntur dolores."
			/>
			<Alert
				type={"alert-warning"}
				icon={<AlertTriangle size={20} />}
				title="Tips & Tricks"
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus et ea nostrum eum. Nesciunt eos aperiam praesentium placeat ea velit voluptates, repellendus dicta iure maiores reprehenderit molestiae asperiores consequuntur dolores."
			/>
			<Alert
				type={"alert-error"}
				icon={<Ban size={20} />}
				title={"error"}
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus et ea nostrum eum. Nesciunt eos aperiam praesentium placeat ea velit voluptates, repellendus dicta iure maiores reprehenderit molestiae asperiores consequuntur dolores."
			/>
		</>
	);
}

export default App;
