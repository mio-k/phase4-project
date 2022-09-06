class User < ApplicationRecord
    has_secure_password
    has_many :items
    has_one :dog
end
