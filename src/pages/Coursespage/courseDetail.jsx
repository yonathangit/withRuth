

import React from 'react';
import styled from 'styled-components';
import { HiArrowNarrowRight } from 'react-icons/hi';
// import avatarImage from "./avatarImage.jpeg"
import { cardStyles } from '../../components/ReusableStyles';

export default function CourseDetail() {
  const transactions = [
    {
      name: 'Abebe Kebede',
      time: 'Expertise with X',
      amount: '1 Hour Lecture',
    },
    {
      name: 'Abebe Kebede',
      time: 'xpertise with Y',
      amount: '2 Hour Lecture',
    },
    {
      name: 'Abebe Kebede',
      time: 'xpertise with Z',
      amount: '3 Hour Lecture',
    },
  ];
  return (
    <>
    <br /><br />
    <section style={{ marginLeft: '20vw', marginRight: '2vw' }}>
      <h2>Frontend Development Detailed Course Description</h2>
       <img src='./DotLogo2.png' width='920px' height='500px' />
      <div className='title'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus sapien in magna gravida, non ullamcorper ante pretium. Nulla massa purus, posuere in felis vel, tristique sagittis neque. Integer pulvinar sapien vel turpis eleifend tincidunt. Curabitur fermentum at erat at tempor. Sed eget justo nisi. Duis elementum sodales erat, nec interdum dui rutrum in. Nunc porttitor non arcu ac scelerisque. Quisque suscipit leo ante. Curabitur pharetra at tellus eu mollis. Ut ullamcorper molestie purus et interdum. Vivamus dapibus fermentum ligula. Donec fermentum fringilla risus.
          <br /><br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus sapien in magna gravida, non ullamcorper ante pretium. Nulla massa purus, posuere in felis vel, tristique sagittis neque. Integer pulvinar sapien vel turpis eleifend tincidunt. Curabitur fermentum at erat at tempor. Sed eget justo nisi. Duis elementum sodales erat, nec interdum dui rutrum in. Nunc porttitor non arcu ac scelerisque. Quisque suscipit leo ante. Curabitur pharetra at tellus eu mollis. Ut ullamcorper molestie purus et interdum. Vivamus dapibus fermentum ligula. Donec fermentum fringilla risus.
        </p>
      </div>
      <div className='title'>
        <h2>Course Instructors</h2>
      </div>
      <div className="transactions">
        {transactions.map((transaction) => {
          return (
            <div className="transaction">
              <div className="transaction__title">
                <div className="transaction__title__image">
                  {/* <img src={transaction.image} alt="" /> */}
                </div>
                <div className="transaction__title__details">
                  <h3>{transaction.name}</h3>
                  <h5>{transaction.time}</h5>
                </div>
              </div>
              <div className="transaction__amount">
                <span>{transaction.amount}</span>
              </div>
            </div>
          );
        })}
      </div>
      <a className='view' href='#'>
        Enroll Now <HiArrowNarrowRight />
      </a>
    </section>
    </>
  );
}

const Section = styled.section`
  ${cardStyles};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .title {
    h2 {
      color: Orange;
      font-family: 'Permanent Marker', cursive;
      letter-spacing: 0.3rem;
    }
  }
  .transactions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    .transaction {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      &__title {
        display: flex;
        gap: 1rem;
        &__image {
          img {
            height: 2.5rem;
            border-radius: 3rem;
          }
        }
        &__details {
        }
      }
      &__amount {
        background-color: #d7e41e1d;
        padding: 0.2rem 0.5rem;
        width: 7rem;
        border-radius: 1rem;
        text-align: center;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #ffc107;
          span {
            color: black;
          }
        }
        span {
          color: #ffc107;
        }
      }
    }
  }
  .view {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
    color: #ffc107;
    font-weight: bold;
    margin-top: 1rem;
    gap: 0.5rem;
    svg {
      transition: 0.3s ease-in-out;
      font-size: 1.4rem;
    }
    &:hover {
      svg {
        transform: translateX(0.5rem);
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 375px) {
    .transactions {
      .transaction {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }
    }
  }
`;
