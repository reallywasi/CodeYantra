// pages/observations.js

import ObservationForm from '../../components/ObservationForm';
import ObservationList from '../../components/ObservationList';

const ObservationsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Observation Management</h1>
      <ObservationForm />
      <ObservationList />
    </div>
  );
};

export default ObservationsPage;
