import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const JobPage = () => {
  const { id } = useParams();
  const [job, setJobs] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const limit = isHome ? `?_limit=3` : ``;
    const apiUrl = `/api/jobs/${id}`;

    const fetchJobs = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log(`Error fetching data: `, error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return loading ? <Spinner loading={loading} /> : <h1>{job.title}</h1>;
};

export default JobPage;
