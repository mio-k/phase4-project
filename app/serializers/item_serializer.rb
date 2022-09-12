class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :description

  has_one :user 
  has_many :tags
end
