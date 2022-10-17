export default function Flight({flight}) {
    return (
        <div>
            {flight.mission_name}, {flight.launch_year}
            <img src={flight.links.mission_patch_small} alt={flight.mission_name}/>
        </div>
    );
}