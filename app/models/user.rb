class User < ApplicationRecord
    has_secure_password
    has_many :userrescues, dependent: :destroy
    has_many :rescues, through: :userrescues
    validates :name, presence: true
end
