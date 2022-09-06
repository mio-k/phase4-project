# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
item1 = Item.create(name:"martingale collar", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,", user_id:user1.id)
item2 = Item.create(name:"fine comb", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", user_id:user2.id)
item3 = Item.create(name:"pee pad", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", user_id:user2.id)
item4 = Item.create(name:"small harness", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", user_id:user1.id)
item5 = Item.create(name:"bitter apple spray", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", user_id:user3.id)
item6 = Item.create(name:"soft nylon puppy collar", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", user_id:user3.id)
item7 = Item.create(name:"puppy food", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", user_id:user1.id)

tag1 = Tag.create(category:"walking")
tag2 = Tag.create(category:"food")
tag3 = Tag.create(category:"grooming")
tag4 = Tag.create(category:"puppy care")

item_tags1 = ItemTag.create(item_id:item1.id, tag_id:tag4.id)
item_tags2 = ItemTag.create(item_id:item2.id, tag_id:tag3.id)
item_tags3 = ItemTag.create(item_id:item3.id, tag_id:tag4.id)
item_tags4 = ItemTag.create(item_id:item4.id, tag_id:tag1.id)
item_tags5 = ItemTag.create(item_id:item5.id, tag_id:tag4.id)
item_tags6 = ItemTag.create(item_id:item6.id, tag_id:tag1.id)
item_tags7 = ItemTag.create(item_id:item6.id, tag_id:tag1.id)
item_tags8 = ItemTag.create(item_id:item7.id, tag_id:tag2.id)
item_tags9 = ItemTag.create(item_id:item7.id, tag_id:tag4.id)
