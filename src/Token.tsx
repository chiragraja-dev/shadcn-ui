import { useParams } from 'react-router-dom';

function Token() {
    const { token } = useParams();

    // Use the token as needed
    return (
        <div>
            Token: {token}
        </div>
    );
}
export default Token