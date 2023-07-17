db.users.insertMany(
	[
		{ name: "Vasia", age: 25 },
		{ name: "Misha", age: 62 },
		{ name: "Olga", age: 48 },
		{ name: "Kirilo", age: 34 },
		{ name: "Mykola", age: 86 },
		{ name: "Igor", age: 32 },

	]
)


db.users.find({ $or: [{ name: "Mykola" }, { age: 32 }] })

db.users.update(
	{ name: "Mykola" },

	{
		$set: {
			name: "Ditrich",
			age: 83
		}
	}


)


db.users.updateMany(
	{},
	{
		$rename:
			{ name: "fullname" }
	}
)


db.users.bulkWrite(
	[{
		insertOne: {
			document: {
				fullname: "Nastya",
				age: 29
			}
		}
	},

	{
		deleteOne: {
			filter: {
				fullname: "Misha"
			}
		}
	}]
)