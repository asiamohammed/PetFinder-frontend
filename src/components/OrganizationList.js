
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";


const Organization = () => {
  const [organization, setOrganization] = useState([]);
  const [allOrganizations, setallOrganizations] = useState([])
  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/63d0df29ebd26539d06758b6")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.record.Organizations);
        setallOrganizations(data.record.organizations)
        setOrganization(data.record.organizations);

      });
  }, []);

  function handleSearch(value){
    console.log(allOrganizations);
    const updatedOrg= allOrganizations.filter(org=> org.name.toLowerCase().includes(value.toLowerCase()))
    setOrganization(updatedOrg)
  }

  const OrganizationCard = ({ organization, id}) => {
    return (<Link to={`/organizationDetails/${id}`}>
      <div className="organizationCards cursor-pointer rounded-md p-3 bg-white ring-1 ring-slate-200 shadow-sm hover:bg-gray-200   ">
        <article className="flex items-start space-x-6 p-6">
          {/* { console.log(organization.photos[0].small)} */}
          {organization.photos.length > 0 ? (
            <img
              src={organization.photos[0].large}
              alt={organization.name + " logo"}
              width="60"
              height="88"
              className="flex-none rounded-md bg-slate-100"
            />
          ) : (
            <img
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
              alt={organization.name + " logo"}
              width="60"
              height="88"
              className="flex-none rounded-md bg-slate-100"
            />
          )}
          <div className="min-w-0 relative flex-auto">
            <h2 className="font-semibold text-slate-900 truncate pr-20">
              {organization.name}
            </h2>
            <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
              <div className="absolute top-0 right-0 flex items-center space-x-1">
                <dt className="text-sky-500">
                  <span className="sr-only">{organization.id}</span>
                </dt>
                <dd>🇺🇸: {organization.address.country}</dd>
              </div>
              <div>
                <dt className="sr-only">ID</dt>
                <dd className="px-1.5 ring-1 ring-slate-200 rounded">
                  {organization.id}
                </dd>
              </div>
              <div className="ml-2">
                <dt className="sr-only ">CITY</dt>
                <dd className="px-1.5 ring-1 ring-slate-200 rounded">
                  {organization.address.city}
                </dd>
              </div>
              <div>
                <dt className="sr-only">COUNTRY</dt>
                <dd className="flex items-center">
                  <svg
                    width="2"
                    height="2"
                    fill="currentColor"
                    className="mx-2 text-slate-300"
                    aria-hidden="true"
                  >
                    <circle cx="1" cy="1" r="1" />
                  </svg>
                  {organization.country}
                </dd>
              </div>
              <div>
                <dt className="sr-only">EMAIL</dt>
                <dd className="px-1.5 ring-1 ring-slate-200 rounded flex items-center">
                  <svg
                    width="2"
                    height="2"
                    fill="currentColor"
                    className="mx-2 text-slate-300"
                    aria-hidden="true"
                  >
                    <circle cx="1" cy="1" r="1" />
                  </svg>
                  Email : {organization.email}
                </dd>
              </div>
              <div className="flex-none w-full mt-2 font-normal">
                <dt className="sr-only">Cast</dt>
                <dd className="text-slate-400">
                  📞{" "}
                  {organization.phone ? organization.phone : "(555) 555-1234"}
                </dd>
              </div>
            </dl>
          </div>
        </article>
      </div>
      </Link>
    );
  };
  return (
    <div className="mt-8">
      <Search onSearch={handleSearch}/>
      <div className="MainOrganizationCards cursor-pointer rounded-md p-3 bg-white ring-1 ring-slate-200 ">
      {organization.map((org, index) => (
        <OrganizationCard key={index} organization={org} id={index}/>
      ))}
    </div>
    </div>
  );
};
export default Organization;


