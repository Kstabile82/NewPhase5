class User < ApplicationRecord
    has_secure_password
    validates :name, presence: true
    has_many :user_rescues, dependent: :destroy
    # has_many :rescues, through: :userrescues
end
