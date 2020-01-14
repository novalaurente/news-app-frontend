import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Sidebar = (props) => {
  const base_url = process.env.REACT_APP_API_URL;
  const [sources, setSources] = useState([]);

  useEffect(() => {
    axios.get(base_url + '/sources').then(res => {
      setSources(res.data);

      props.setSelectedSource(res.data[0].id);
    });
  }, []);

  const sourceClicked = (e) => {
    props.setSelectedSource(e.currentTarget.getAttribute('data-source-id'));
  }

  return (
    <div className="col-lg-2 bg-primary">
      <ul className="list-group text-white mt-5">
        {sources.map((source, index) => (
          <li className="list-group-item bg-primary" key={index} onClick={sourceClicked} data-source-id={source.id} style={{cursor: 'pointer'}}>
            {source.name}
          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default Sidebar;