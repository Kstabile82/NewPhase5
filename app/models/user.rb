class User < ApplicationRecord
    has_secure_password
    validates :name, presence: true
    # has_many :userrescues, dependent: :destroy
    # has_many :rescues, through: :userrescues
end
