class Item < ApplicationRecord
    belongs_to :user
    has_many :item_tags
    has_many :tags, through: :item_tags
    validates :user_id, presence: true
end
