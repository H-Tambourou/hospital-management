import React from 'react';

const Feed = function Feed() {
  const data = [
    {
      Name: 'Leslie Alexander',
      Email: 'leslie.alexander@example.com',
      Date: '10/20/2020',
      Visit: '9:15am',
    },
    {
      Name: 'Shuri Shoom',
      Email: 'shuri.shoom@example.com',
      Date: '10/20/2020',
      Visit: '9:15am',
    },
    {
      Name: 'Teresa Holland',
      Email: 'teresa.holland@example.com',
      Date: '10/20/2020',
      Visit: '9:15am',
    },
    {
      Name: 'Rol Xord',
      Email: 'rol.xord@example.com',
      Date: '10/20/2020',
      Visit: '9:15am',
    },
    {
      Name: 'Charley Sage',
      Email: 'charley.sage@example.com',
      Date: '10/20/2020',
      Visit: '9:15am',
    },
    {
      Name: 'Meek Rugnoor',
      Email: 'meek.rugnoor@example.com',
      Date: '10/20/2020',
      Visit: '9:15am',
    },
  ];
  return (
    <div className="feed" style={{ overflowX: 'auto' }}>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Date</th>
          <th>Visit Time</th>
          <th> </th>
        </tr>
        {data.map((item) => (
          <tr key={item.Name}>
            <td>{item.Name}</td>
            <td>{item.Email}</td>
            <td>{item.Date}</td>
            <td>{item.Visit}</td>
            <td>
              <button type="submit">Check in</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};
export default Feed;
