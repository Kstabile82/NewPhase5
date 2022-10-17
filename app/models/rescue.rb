class Rescue < ApplicationRecord
    has_many :userrescues, dependent: :destroy
    has_many :informations, dependent: :destroy
    has_many :users, through: :userrescues
    has_many :questions, through: :informations
    # validates :name, presence: :true
    # validates :name, uniqueness: :true
end
