class UserSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname

  has_one :dog
  has_many :items
end
