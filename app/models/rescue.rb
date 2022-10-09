class Rescue < ApplicationRecord
    has_many :userrescues, dependent: :destroy
    has_many :users, through: :userrescues
    # validates :name, presence: :true
    # validates :name, uniqueness: :true
end
