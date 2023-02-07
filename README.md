# RS CLONE-api(clone Trello)

Api for Rolling Scopes School task "RS CLONE Trello".

## Setup and Running

- Use `node 14.x` or higher.
- Clone this repo: `$ git clone https://github.com/mclakov/rs-clone-serv.git`.
- Go to downloaded folder: `$ cd rs-clone-serv`.
- Install dependencies: `$ npm install`.
- Start server: `$ npm start`.
- Now you can send requests to the address: `http://localhost:3008/`.

## Usage

- **Registration**
  - [Registration new User](https://github.com/mclakov/rs-clone-serv#Registration)

- **Login**
  - [Login User](https://github.com/mclakov/rs-clone-serv#sLogin)

- **User**
  - [Load User Data](https://github.com/mclakov/rs-clone-serv#Load)
  - [Save User Data](https://github.com/mclakov/rs-clone-serv#Save)

**Registration**
----

Registration new user.

<details>

* **URL**

  /api/registration

* **Method:**

  `POST`

* **Headers:**

  ```json
  {
    "Content-Type": "application/json;charset=utf-8",
    "Access-Control-Allow-Origin": "*"
  }
  ```
  
* **URL Params**

  None

* **Query Params**

  None

  **Optional:**

  None

* **Data Params**

  ```json
  {
    "username": "string",
    "password": "string",
    "workspaces": [{"WORKSPACE_ID":"1","WORKSPACE_TITLE":"workspace-1","WORKSPACE_BOARDS":[{"BOARD_ID":"1","BOARD_TITLE":"board-1","BOARD_LISTS":[{"LIST_ID":"1","LIST_TITLE":"list-1","LIST_CARDS":[{"CARD_ID":"1","CARD_DATA":"some text about task-1"},{"CARD_ID":"2","CARD_DATA":"some text about task-1"}]},{"LIST_ID":"2","LIST_TITLE":"list-2","LIST_CARDS":[{"CARD_ID":"1","CARD_DATA":"some text about task-1"},{"CARD_ID":"2","CARD_DATA":"some text about task-1"},{"CARD_ID":"3","CARD_DATA":"some text about task-1"}]}]},{"BOARD_ID":"2","BOARD_TITLE":"board-2","BOARD_LISTS":[{"LIST_ID":"1","LIST_TITLE":"list-1","LIST_CARDS":[{"CARD_ID":"1","CARD_DATA":"some text about task-1"},{"CARD_ID":"2","CARD_DATA":"some text about task-1"},{"CARD_ID":"3","CARD_DATA":"some text about task-1"}]},{"LIST_ID":"2","LIST_TITLE":"list-2","LIST_CARDS":[{"CARD_ID":"1","CARD_DATA":"some text about task-1"},{"CARD_ID":"2","CARD_DATA":"some text about task-1"},{"CARD_ID":"3","CARD_DATA":"some text about task-1"}]}]}]},{"WORKSPACE_ID":"2","WORKSPACE_TITLE":"workspace-2","WORKSPACE_BOARDS":[{"BOARD_ID":"1","BOARD_TITLE":"board-1","BOARD_LISTS":[{"LIST_ID":"1","LIST_TITLE":"list-1","LIST_CARDS":[{"CARD_ID":"1","CARD_DATA":"some text about task-1"},{"CARD_ID":"2","CARD_DATA":"some text about task-1"},{"CARD_ID":"3","CARD_DATA":"some text about task-1"}]},{"LIST_ID":"2","LIST_TITLE":"list-2","LIST_CARDS":[{"CARD_ID":"1","CARD_DATA":"some text about task-1"},{"CARD_ID":"2","CARD_DATA":"some text about task-1"},{"CARD_ID":"3","CARD_DATA":"some text about task-1"}]}]}]}]
  }
  ```

* **Success Response:**

  * **Code:** 200 <br />

  ```json
  {
    "message": "User registration completed!"
  }
  ```

* **Error Response:**

  * **Code:** 400 <br />
  
  ```json
  {
  "message": "Registration error! User already exists"
  }
  ```

  ```json
  {
    "message": "Registration error"
  }
  ```

</details>

**Login**
----

Login user.

<details>

* **URL**

  /api/login

* **Method:**

  `POST`

* **Headers:**

  ```json
  {
    "Content-Type": "application/json;charset=utf-8",
    "Access-Control-Allow-Origin": "*"
  }
  ```
  
* **URL Params**

  None

* **Query Params**

  None

  **Optional:**

  None

* **Data Params**

  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```

* **Success Response:**

  * **Code:** 200 <br />

  ```json
  {
    "63e14d7ab8c7f3888d6cb0f4"
  }
  ```

* **Error Response:**

  * **Code:** 400 <br />
  
  ```json
  {
    "message": "User ${user} not found!"
  }
  ```

  ```json
  {
    "message": "Password incorrect!"
  }
  ```

  ```json
  {
    "message": "Login error"
  }
  ```

</details>

**Load**
----

Load userdata from server.

<details>

* **URL**

  /api/userdata

* **Method:**

  `GET`

* **Headers:**

  ```json
  {
    "Content-Type": "application/json;charset=utf-8",
    "Access-Control-Allow-Origin": "*"
  }
  ```
  
* **URL Params**

  None

* **Query Params**

  None

  **Optional:**

  None

* **Data Params**
  
  ```json
  {
    "id": "string"
  }
  ```

* **Success Response:**

  * **Code:** 200 <br />

  ```json
  {
    "_id": "63e14d7ab8c7f3888d6cb0f4",
    "username": "user",
    "password": "12345",
    "workspaces": [
        {
            "WORKSPACE_ID": "1",
            "WORKSPACE_TITLE": "workspace-1",
            "WORKSPACE_BOARDS": [
                {
                    "BOARD_ID": "1",
                    "BOARD_TITLE": "board-1",
                    "BOARD_LISTS": [
                        {
                            "LIST_ID": "1",
                            "LIST_TITLE": "list-1",
                            "LIST_CARDS": [
                                {
                                    "CARD_ID": "1",
                                    "CARD_DATA": "some text about task-1"
                                },
                                {
                                    "CARD_ID": "2",
                                    "CARD_DATA": "some text about task-1"
                                }
                            ]
                        },
                        {
                            "LIST_ID": "2",
                            "LIST_TITLE": "list-2",
                            "LIST_CARDS": [
                                {
                                    "CARD_ID": "1",
                                    "CARD_DATA": "some text about task-1"
                                },
                                {
                                    "CARD_ID": "2",
                                    "CARD_DATA": "some text about task-1"
                                },
                                {
                                    "CARD_ID": "3",
                                    "CARD_DATA": "some text about task-1"
                                }
                            ]
                        }
                    ]
                },
                {
                    "BOARD_ID": "2",
                    "BOARD_TITLE": "board-2",
                    "BOARD_LISTS": [
                        {
                            "LIST_ID": "1",
                            "LIST_TITLE": "list-1",
                            "LIST_CARDS": [
                                {
                                    "CARD_ID": "1",
                                    "CARD_DATA": "some text about task-1"
                                },
                                {
                                    "CARD_ID": "2",
                                    "CARD_DATA": "some text about task-1"
                                },
                                {
                                    "CARD_ID": "3",
                                    "CARD_DATA": "some text about task-1"
                                }
                            ]
                        },
                        {
                            "LIST_ID": "2",
                            "LIST_TITLE": "list-2",
                            "LIST_CARDS": [
                                {
                                    "CARD_ID": "1",
                                    "CARD_DATA": "some text about task-1"
                                },
                                {
                                    "CARD_ID": "2",
                                    "CARD_DATA": "some text about task-1"
                                },
                                {
                                    "CARD_ID": "3",
                                    "CARD_DATA": "some text about task-1"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "WORKSPACE_ID": "2",
            "WORKSPACE_TITLE": "workspace-2",
            "WORKSPACE_BOARDS": [
                {
                    "BOARD_ID": "1",
                    "BOARD_TITLE": "board-1",
                    "BOARD_LISTS": [
                        {
                            "LIST_ID": "1",
                            "LIST_TITLE": "list-1",
                            "LIST_CARDS": [
                                {
                                    "CARD_ID": "1",
                                    "CARD_DATA": "some text about task-1"
                                },
                                {
                                    "CARD_ID": "2",
                                    "CARD_DATA": "some text about task-1"
                                },
                                {
                                    "CARD_ID": "3",
                                    "CARD_DATA": "some text about task-1"
                                }
                            ]
                        },
                        {
                            "LIST_ID": "2",
                            "LIST_TITLE": "list-2",
                            "LIST_CARDS": [
                                {
                                    "CARD_ID": "1",
                                    "CARD_DATA": "some text about task-1"
                                },
                                {
                                    "CARD_ID": "2",
                                    "CARD_DATA": "some text about task-1"
                                },
                                {
                                    "CARD_ID": "3",
                                    "CARD_DATA": "some text about task-1"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    "__v": 0
    }
  ```

* **Error Response:**

  * **Code:** 400 <br />
  ```json
  {
    "message": "User's data not found!"
  }
  ```

  ```json
  {
    "message": "Server error!"
  }
  ```

</details>

**Save**
----

Save userdata to server.

<details>

* **URL**

  /api/userdata

* **Method:**

  `PUT`

* **Headers:**

  ```json
  {
  "Content-Type": "application/json;charset=utf-8",
  "Access-Control-Allow-Origin": "*"
  }
  ```
  
* **URL Params**

  None

* **Query Params**

  None

  **Optional:**

  None

* **Data Params**

  ```json
  {
   "id": "63e14d7ab8c7f3888d6cb0f4",
   "newUserData": [
      {
          "WORKSPACE_ID": "111111",
          "WORKSPACE_TITLE": "workspace-11111111",
          "WORKSPACE_BOARDS": [
              {
                  "BOARD_ID": "1",
                  "BOARD_TITLE": "board-1",
                  "BOARD_LISTS": [
                      {
                          "LIST_ID": "1",
                          "LIST_TITLE": "list-1",
                          "LIST_CARDS": [
                              {
                                  "CARD_ID": "1",
                                  "CARD_DATA": "some text about task-1"
                              },
                              {
                                  "CARD_ID": "2",
                                  "CARD_DATA": "some text about task-1"
                              }
                          ]
                      },
                      {
                          "LIST_ID": "2",
                          "LIST_TITLE": "list-2",
                          "LIST_CARDS": [
                              {
                                  "CARD_ID": "1",
                                  "CARD_DATA": "some text about task-1"
                              },
                              {
                                  "CARD_ID": "2",
                                  "CARD_DATA": "some text about task-1"
                              },
                              {
                                  "CARD_ID": "3",
                                  "CARD_DATA": "some text about task-1"
                              }
                          ]
                      }
                  ]
              },
              {
                  "BOARD_ID": "2",
                  "BOARD_TITLE": "board-2",
                  "BOARD_LISTS": [
                      {
                          "LIST_ID": "1",
                          "LIST_TITLE": "list-1",
                          "LIST_CARDS": [
                              {
                                  "CARD_ID": "1",
                                  "CARD_DATA": "some text about task-1"
                              },
                              {
                                  "CARD_ID": "2",
                                  "CARD_DATA": "some text about task-1"
                              },
                              {
                                  "CARD_ID": "3",
                                  "CARD_DATA": "some text about task-1"
                              }
                          ]
                      },
                      {
                          "LIST_ID": "2",
                          "LIST_TITLE": "list-2",
                          "LIST_CARDS": [
                              {
                                  "CARD_ID": "1",
                                  "CARD_DATA": "some text about task-1"
                              },
                              {
                                  "CARD_ID": "2",
                                  "CARD_DATA": "some text about task-1"
                              },
                              {
                                  "CARD_ID": "3",
                                  "CARD_DATA": "some text about task-1"
                              }
                          ]
                      }
                  ]
              }
          ]
      },
      {
          "WORKSPACE_ID": "2",
          "WORKSPACE_TITLE": "workspace-2",
          "WORKSPACE_BOARDS": [
              {
                  "BOARD_ID": "1",
                  "BOARD_TITLE": "board-1",
                  "BOARD_LISTS": [
                      {
                          "LIST_ID": "1",
                          "LIST_TITLE": "list-1",
                          "LIST_CARDS": [
                              {
                                  "CARD_ID": "1",
                                  "CARD_DATA": "some text about task-1"
                              },
                              {
                                  "CARD_ID": "2",
                                  "CARD_DATA": "some text about task-1"
                              },
                              {
                                  "CARD_ID": "3",
                                  "CARD_DATA": "some text about task-1"
                              }
                          ]
                      },
                      {
                          "LIST_ID": "2",
                          "LIST_TITLE": "list-2",
                          "LIST_CARDS": [
                              {
                                  "CARD_ID": "1",
                                  "CARD_DATA": "some text about task-1"
                              },
                              {
                                  "CARD_ID": "2",
                                  "CARD_DATA": "some text about task-1"
                              },
                              {
                                  "CARD_ID": "3",
                                  "CARD_DATA": "some text about task-1"
                              }
                          ]
                      }
                  ]
              }
          ]
      }
   ]
  }
  ```

* **Success Response:**

  * **Code:** 200 <br />

  ```json
  {
  "message": "User's data update!"
  }
  ```

* **Error Response:**

  * **Code:** 400 <br />
  
  ```json
  {
  "message": "User ${user} not found!"
  }
  ```

  ```json
  {
  "message": "Server error!"
  }
  ```

</details>
