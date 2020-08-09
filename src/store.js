export default {
    users: [
        {
            id: 1,
            name: "AJ Bates",
        },
    ],

    jobs: [
        {
            id: 1,
            name: "JL Beers",
            role: "Supervisor",
            hourly: 15.00
        },
        {
            id: 2,
            name: "JL Beers",
            role: "Beertender",
            hourly: 10.00
        }
    ],

    shift: [
        {
            id: 1,
            userId: 1,
            jobId: 2,
            tips: 100,
            hours: 5.5,
            date: new Date(2020, 8, 1)
        },
        {
            id: 2,
            userId: 1,
            jobId: 2,
            tips: 120,
            hours: 5.3,
            date: new Date(2020, 8, 2)
        },
        {
            id: 3,
            userId: 1,
            jobId: 2,
            tips: 115,
            hours: 4.78,
            date: new Date(2020, 8, 4)
        },
        {
            id: 4,
            userId: 1,
            jobId: 2,
            tips: 175,
            hours: 6.74,
            date: new Date(2020, 8, 3)
        },
        {
            id: 5,
            userId: 1,
            jobId: 2,
            tips: 153,
            hours: 5.53,
            date: new Date(2020, 8, 5)
        }
    ],

    paychecks: [
        {
            id: 1,
            jobId: 1,
            userId: 1,
            paycheck: 350,
            date: new Date(2020, 8, 1)
        }
    ]
}