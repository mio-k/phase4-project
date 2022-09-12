class DogSerializer < ActiveModel::Serializer
  attributes :id, :name, :breed, :age, :color
  belongs_to :user
end
