import React, { useState } from "react"
import { ReactComponent as Search } from "../../assets/icons/search.svg"

const Customers = () => {
  const items = [
    {
      id: "1",
      name: "Jane Cooper",
      company: "Microsoft",
      phone: "(225) 555-0118",
      email: "jane@microsoft.com",
      country: "United States",
      status: true
    },
    {
      id: "2",
      name: "Floyd Miles",
      company: "Yahoo",
      phone: "(205) 555-0100",
      email: "floyd@yahoo.com",
      country: "Kiribati",
      status: false
    },
    {
      id: "3",
      name: "Ronald Richards",
      company: "Adobe",
      phone: "(302) 555-0107",
      email: "ronald@adobe.com",
      country: "Israel",
      status: false
    },
    {
      id: "4",
      name: "Marvin McKinney",
      company: "Tesla",
      phone: "(252) 555-0126",
      email: "marvin@tesla.com",
      country: "Iran",
      status: true
    },
    {
      id: "5",
      name: "Jerome Bell",
      company: "Google",
      phone: "(629) 555-0129",
      email: "jerome@google.com",
      country: "Réunion",
      status: true
    },
    {
      id: "6",
      name: "Kathryn Murphy",
      company: "Microsoft",
      phone: "(406) 555-0120",
      email: "kathryn@microsoft.com",
      country: "Curaçao",
      status: true
    },
    {
      id: "7",
      name: "Jacob Jones",
      company: "Yahoo",
      phone: "(208) 555-0112",
      email: "jacob@yahoo.com",
      country: "Brazil",
      status: true
    },
    {
      id: "8",
      name: "Kristin Watson",
      company: "Facebook",
      phone: "(704) 555-0127",
      email: "kristin@facebook.com",
      country: "Åland Islands",
      status: false
    }
  ]
  return (
    <div className="customers">
      <div className="title b-title bt24">Hello Evano 👋🏼,</div>
      <div className="customers-wrapper">
        <div className="top">
          <div className="left">
            <h1 className="b-title bt22 semibold">All Customers</h1>
            <div className="b-title bt14 light color10">Active Members</div>
          </div>
          <div className="right form-style">
            <div className="search">
              <input type="search" name="search" placeholder="Search" />
              <div className="icon"><Search /></div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Customer Name</th>
                  <th>Company</th>
                  <th>Phone Number</th>
                  <th>Email</th>
                  <th>Country</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {items.map((e, i) => {
                  return (
                    <tr key={i}>
                      <td>{e.name}</td>
                      <td>{e.company}</td>
                      <td>{e.phone}</td>
                      <td>{e.email}</td>
                      <td>{e.country}</td>
                      <td>
                        {e.status
                          ? <button className="styled-btn styled-btn-1">Active</button>
                          : <button className="styled-btn styled-btn-2">Inactive</button>
                        }
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <div className="pagination">
            <div className="pagination--left">
              <div className="b-title bt14 color12">Showing data 1 to 8 of  256K entries</div>
            </div>
            <div className="pagination--right">
              <div className="arrow arrow--prev">{`<`}</div>
              <div className="pages">
                <span className="active">1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span className="empty">...</span>
                <span>40</span>
              </div>
              <div className="arrow arrow--next">{`>`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Customers